<?php
session_start();
if (!isset($_SESSION['admin'])){
	header("Location: adminlogin.php");
};
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPEUI PetroBowl || Admin Page</title>
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/adminpage-grid.css">
  <link rel="stylesheet" href="css/adminpage.css">
  <script src="js/jquery-min.js"></script>
  <script src="js/adminpage.js"></script>
</head>
<body class="body page-adminpage clearfix">
  <a href="adminlogin.php" id="logout" class="logout logout-1">Logout</a>
  <p id="lastlogin" class="lastlogin lastlogin-1">Last Login:</p>
  <div id="contresult" class="contresult contresult-1">
    <p>Eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim. Quinta decima eodem modo typi qui nunc nobis videntur parum, clari fiant sollemnes. Nam liber tempor cum soluta nobis assum typi. Nulla facilisis at vero eros et accumsan et iusto odio dignissim qui. Eum iriure dolor in hendrerit in vulputate velit esse. Etiam processus dynamicus qui sequitur mutationem consuetudium lectorum mirum est. Claritatem Investigationes demonstraverunt lectores legere me lius, quod ii legunt.</p>
    <p>Et quinta decima eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in. Dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh!</p>
    <p>Augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta. Sequitur mutationem consuetudium lectorum mirum est notare quam littera gothica quam nunc putamus parum claram anteposuerit. Quinta decima eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in! Est etiam processus dynamicus qui litterarum formas humanitatis per seacula quarta decima et. Ut aliquip ex ea commodo consequat duis autem vel eum iriure dolor in hendrerit. Eros et accumsan et iusto odio dignissim qui blandit; praesent luptatum zzril delenit nobis eleifend. Lobortis nisl in vulputate velit esse molestie consequat.</p>
    <p>Est etiam processus dynamicus qui sequitur mutationem consuetudium lectorum mirum est. Et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril. Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut! Quod ii legunt saepius claritas notare quam littera gothica quam nunc putamus parum claram! Liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat. Est usus legentis in iis qui facit eorum.</p>
    <p>Claritatem insitam est usus legentis in iis qui facit eorum claritatem Investigationes demonstraverunt lectores legere. Hendrerit in vulputate velit esse molestie consequat vel illum; dolore eu feugiat nulla.</p>
    <p>Eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim. Quinta decima eodem modo typi qui nunc nobis videntur parum, clari fiant sollemnes. Nam liber tempor cum soluta nobis assum typi. Nulla facilisis at vero eros et accumsan et iusto odio dignissim qui. Eum iriure dolor in hendrerit in vulputate velit esse. Etiam processus dynamicus qui sequitur mutationem consuetudium lectorum mirum est. Claritatem Investigationes demonstraverunt lectores legere me lius, quod ii legunt.</p>
  </div>
  <p id="contname" class="contname contname-1">Name: Adedire Oluwaseun Obasesam</p>
  <p id="anstext" class="anstext anstext-1">Answers</p>
  <form id="continput">
  <button id="admincheckanswers" class="admincheckanswers admincheckanswers-1" type="submit">Check Answers</button>
  <input id="contusername" class="contusername contusername-1" name="conuserid" placeholder="Contestant UserID" type="text">
  </form>
  <div id="adminspelogo" class="adminspelogo adminspelogo-1"></div>
  <div id="header" class="header header-1"></div>
</body>
</html>
