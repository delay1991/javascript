<%@page import="co.yedam.UserVO"%>
<%@page import="java.util.List"%>
<%@page import="co.yedam.UserDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	UserDAO dao = new UserDAO();
	List<UserVO> list = dao.getUsers();
	//id, username, birth
	out.print("<table border='1'>");

	for (UserVO vo : list) { //이미 jsp가 가진객체
		out.println("<tr>");
		out.println("<td>" + vo.getUserId() + "</td>");
		out.println("<td>" + vo.getUserName() + "</td>");
		out.println("<td>" + vo.getUserBrith() + "</td>");
		out.println("<tr>");
	}
	
	for(UserVO vo: list){
		out.println("<tr><td>"+vo.getUserName()+"</td><td>"+vo.getUserHobby()+"</td><td><input type=\'date\' value='"+vo.getUserBrith()+"'>"+"</td></tr>");
	}
	
	out.print("</table>");
	%>
</body>
</html>