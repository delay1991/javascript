package co.yedam.board;

public class AppMain {
	public static void main(String[] args) {
		CommentDAO dao = CommentDAO.getInstance();
		dao.selectAll();
	}
}
