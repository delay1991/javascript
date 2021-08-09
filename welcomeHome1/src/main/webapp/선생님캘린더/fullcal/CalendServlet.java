package co.yedam.fullcal;

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

@WebServlet("/CalendServlet")
public class CalendServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public CalendServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd");
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
		HashMap<String, Object> map = new HashMap<String, Object>();

		if (cmd == null) {

			map.put("msg", "no cmd");
			out.print(gson.toJson(map));

		} else if (cmd.equals("selectAll")) {

			List<HashMap<String, Object>> list = null;
			try {
				list = CalDAO.getInstance().getSchedules();
				map.put("code", "success");
				map.put("data", list);

			} catch (Exception e) {
				e.printStackTrace();
				map.put("code", "error");
				map.put("data", e.getMessage());
			}

		} else if (cmd.equals("insert")) {

			String title = request.getParameter("title");
			String start = request.getParameter("start");
			String end = request.getParameter("end");
			Calendar cal = new Calendar();
			cal.setTitle(title);
			cal.setStart(start);
			cal.setEnd(end);

			try {
				HashMap<String, Object> data = CalDAO.getInstance().insert(cal);
				map.put("code", "success");
				map.put("data", data);

			} catch (Exception e) {
				e.printStackTrace();
				map.put("code", "error");
				map.put("data", e.getMessage());
			}

		} else if (cmd.equals("delete")) {
			String title = request.getParameter("title");
			try {
				HashMap<String, Object> data = CalDAO.getInstance().delete(title);
				map.put("code", "success");
				map.put("data", data);

			} catch (Exception e) {
				e.printStackTrace();
				map.put("code", "error");
				map.put("data", e.getMessage());
			}

		}

		out.print(gson.toJson(map));

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
