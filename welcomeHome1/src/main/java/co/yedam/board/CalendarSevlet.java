package co.yedam.board;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


@WebServlet("/CalendarSevlet")
public class CalendarSevlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public CalendarSevlet() {
		super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		String cmd = request.getParameter("cmd");
		Gson gson = new GsonBuilder().create();
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		if (cmd == null) {
			
			out.println(errorXML("cmd null"));
		}else if(cmd.equals("selectAll")) { //전체조회
			try {
				List<HashMap<String, Object>> list = CalenderDAO.getInstance().selectAll();
				
				JsonArray outAry = new JsonArray();
				for(int i=0; i<list.size(); i++) {
					HashMap<String, Object> map = list.get(i);
				
					JsonArray inAry=new JsonArray();
					inAry.add((String)map.get("title"));
					inAry.add((String)map.get("start"));
					inAry.add((String)map.get("end"));
					
					outAry.add(inAry);
				}
				JsonObject obj = new JsonObject();
				obj.add("data", outAry);
				response.getWriter().print(gson.toJson(obj));
			}catch(Exception e) {
				StringBuffer sb = new StringBuffer();
				sb.append("<result>");
				sb.append("<code>error</code>");
				sb.append("<data>" + e.getMessage() + "</data>");
				sb.append("</result>");
				out.print(sb.toString());
			}
		}else if(cmd.equals("insert")) { //입력
			String title = request.getParameter("title");
			String start =  request.getParameter("start");
			String end =  request.getParameter("end");
			Calendar cal= new Calendar();
			cal.setTitle(title);
			cal.setStart(start);
			cal.setEnd(end);
			
			try {
				HashMap<String, Object> data = CalenderDAO.getInstance().insert(cal);
				map.put("code", "success");
				map.put("data", data);
				
			}catch(Exception e) {
				e.printStackTrace();
				map.put("code", "error");
				map.put("data", e.getMessage());

			}
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
	
	private String dataXML(HashMap<String, Object> map) {
		StringBuffer sb = new StringBuffer();
		sb.append("<result>");
		sb.append("<code>success</code>");
		sb.append("<data>");
		sb.append("<id>" + map.get("id") + "</id>");
		sb.append("<name>" + map.get("name") + "</name>");
		sb.append("<content>" + map.get("content") + "</content>");
		sb.append("</data>");
		sb.append("</result>");
		return sb.toString();
	}

	private String errorXML(String msg) {
		StringBuffer sb = new StringBuffer();
		sb.append("<result>");
		sb.append("<code>error</code>");
		sb.append("<data>" + msg + "</data>");
		sb.append("</result>");
		return sb.toString();
	}

}
