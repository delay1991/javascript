package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CommentDAO extends DAO {
	private static CommentDAO instance;

	private CommentDAO() {

	}

	public static CommentDAO getInstance() {
		instance = new CommentDAO();
		return instance;
	}

	// 글내용수정
	public HashMap<String, Object> update(Comments comment) {
		connect();
		String sql="update commemts set name=?, content=? where id=?";
		try {
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, comment.getName());
		pstmt.setString(2, comment.getContent());
		pstmt.setString(3, comment.getId());
		int r = pstmt.executeUpdate();
		System.out.println("입력건수:" + r);
		
		HashMap<String, Object> map = new  HashMap<String, Object>();
		map.put("id", comment.getId());
		map.put("name", comment.getName());
		map.put("content", comment.getContent());

		return map;
		
		}catch(SQLException e){
			e.printStackTrace();
			
		}finally {
			disconnect();
		}
		return null;
	}

	// 글등록
	public HashMap<String, Object> insert(Comments comment) {
		System.out.println(comment);
		// id_repository 테이블에서 현제 시퀀스번호
		// comments 테이블추가
		// id_repository에 새로운 시퀀스번호로 변경
		int nextId = 0;
		connect();
		try {// 1 현재시퀀스번호 가져오고
			conn.setAutoCommit(false);
			stmt = conn.createStatement(); // psmt??와 기능 좀다름...
			rs = stmt.executeQuery("select value from id_repository where name='comment'");
			if (rs.next()) {
				nextId = rs.getInt("value");
			}
			// 2 시퀀스1을 증가해서 comment 입력
			nextId++;
			pstmt = conn.prepareStatement("insert into commemts values(?,?,?)");
			pstmt.setInt(1, nextId);
			pstmt.setString(2, comment.getName());
			pstmt.setString(3, comment.getContent());
			int r = pstmt.executeUpdate(); // 조회, executeQuery, 입력수정삭제는 executeUpdate;
			System.out.println("입력건수:" + r);
			// 3 시퀀스번호 변경
			pstmt = conn.prepareStatement("update id_repository set value=? where name='comment'");
			pstmt.setInt(1, nextId);
			pstmt.executeUpdate();

			conn.commit();
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("id", nextId);
			map.put("name", comment.getName());
			map.put("content", comment.getContent());

			return map;

		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.rollback();
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("msg", e.getMessage());
				return map;

			} catch (SQLException e1) {
				e.printStackTrace();
			}

		} finally {
			disconnect();
		}
		return null;
	}// 셀렉트,인서트했을때 에러나면 롤백할려고...?오라클기준 지금은 sqlite

	// 글목록
	public List<HashMap<String, Object>> selectAll() {
		connect();
		List<HashMap<String, Object>> list = //
				new ArrayList<HashMap<String, Object>>();
		try {
			pstmt = conn.prepareStatement("select * from commemts");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				HashMap<String, Object> map = new HashMap<>();
				map.put("id", rs.getString("id"));
				map.put("name", rs.getString("name"));
				map.put("content", rs.getString("content"));
				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
}
