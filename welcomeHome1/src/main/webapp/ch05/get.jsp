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
request.setCharacterEncoding("utf-8"); //한글처리.

String uid = request.getParameter("user_id"); //jsp 나중에 배울꺼양 ㅠㅠ
String upw = request.getParameter("user_pw");
String unm = request.getParameter("user_name");
%>
<h3>ID : <%=uid%></h3>
<h3>PASSWORD : <%=upw%></h3>
<h3>NAME : <%=unm%></h3>

</body>
</html>