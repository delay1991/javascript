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
	public List<HashMap<String, Object>> selectAll() { //전체목록조회
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
	
	public HashMap<String, Object> insert(Calendar cal) throws Exception{
		connect();
		HashMap<String, Object> map = new HashMap<String, Object>();
		String sql = "insert into schedule values(?,?,?)";
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, cal.getTitle());
			pstmt.setString(2, cal.getStart());
			pstmt.setString(3, cal.getEnd());
			int r=pstmt.executeUpdate();
			System.out.println(r+"건 입력.");
			
			map.put("title", cal.getTitle());
			map.put("start", cal.getStart());
			map.put("end", cal.getEnd());
			
		}catch(SQLException e) {
			e.printStackTrace();
			throw new Exception(e.getMessage());
			
		} finally {
			disconnect();
		}
		
		
		return map;
		
	}
}
