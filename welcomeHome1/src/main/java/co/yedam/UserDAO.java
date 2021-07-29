package co.yedam;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAO extends DAO{
	//리스트컬렉션
	public List<UserVO> getUsers(){
		connect();
		List<UserVO> userList = new ArrayList<UserVO>();
		try {
			pstmt = conn.prepareStatement("select * from users");
			rs = pstmt.executeQuery();
			while(rs.next()) {
				UserVO vo = new UserVO(); 
				vo.setUserBrith(rs.getString("user_birth"));
				vo.setUserGen(rs.getString("user_gen"));
				vo.setUserHobby(rs.getNString("user_hobby"));
				vo.setUserName(rs.getString("user_name"));
				vo.setUserPw(rs.getNString("user_pw"));
				vo.setUserId(rs.getString("user_id"));
				userList.add(vo);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return userList;
	}
	
 public void insertUser(UserVO vo) {
	 connect();
	 String sql = "insert into users(user_id, user_pw, user_name, user_gen, user_hobby, user_birth)" +"values(?,?,?,?,?,?)";
	 try {
		pstmt=conn.prepareStatement(sql);
		pstmt.setString(1, vo.getUserId());
		 pstmt.setString(2, vo.getUserPw());
		 pstmt.setString(3, vo.getUserName());
		 pstmt.setString(4, vo.getUserGen());
		 pstmt.setString(5, vo.getUserHobby());
		 pstmt.setString(6, vo.getUserBrith());
		 int r = pstmt.executeUpdate(); 
		 System.out.println(r+"건 입력");
		 
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
	 
 }
}
