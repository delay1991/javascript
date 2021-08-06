package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CalenderDAO extends DAO {
	
	private static CalenderDAO instance;
	
	private CalenderDAO() {

	}
	public static CalenderDAO getInstance() {
		instance = new CalenderDAO();
		return instance;
	}
	public List<HashMap<String, Object>> selectAll() {
		connect();
		List<HashMap<String, Object>> list = //
				new ArrayList<HashMap<String, Object>>();
		try {
			pstmt = conn.prepareStatement("select * from schedule");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				HashMap<String, Object> map = new HashMap<>();
				map.put("title", rs.getString("title"));
				map.put("start", rs.getString("start"));
				map.put("end", rs.getString("end"));
				list.add(map);
			}

//			for (int i = 0; i < list.size(); i++) {
//				HashMap<String, Object> map = list.get(i);
//				System.out.println(map.get("title"));
//				System.out.println(map.get("start"));
//				System.out.println(map.get("end"));
//			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	
	public List<HashMap<String, Object>> insert(Calendar calendar){
		
		stmt = conn.createStatement(); 
		int nextId = 0;
		connect();
		
		try {
			conn.setAutoCommit(false);
			stmt = conn.createStatement(); // pstmt ???
			rs = stmt.executeQuery("insert into schedule values(?,?,?)");
			if (rs.next()) {
				nextId = rs.getInt("");
		}
		return null;
	}
	
	
	

	
}
