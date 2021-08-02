package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CommentDAO extends DAO {

	private static CommentDAO instance;

	private CommentDAO() {

	}

	private static CommentDAO getInstance() {
		instance = new CommentDAO();
		return instance;
	}

	// 글목록
	public List<HashMap<String, Object>> selectAll(){ 
		connect();
		
		List<HashMap<String, Object>> list =
		new ArrayList<String, Object>>
				
		try {
			pstmt = conn.prepareStatement("select*from comments");
			rs = pstmt.executeQuery();
			while(rs.next()) {
				HashMap<String, Object>map = new HashMap<>();
				map.put("id", rs.getString("id"));
				map.put("name", rs.getString("name"));
				map.put("content", rs.getString("content"));
			}
		} catch (SQLException e) {
			
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
	}
}
