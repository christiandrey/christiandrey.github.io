function wngviewer(element, fileName, fileSize) {
	var bodyContent = '<img src="../img/icon.inline-loader.gif.gif" class="inline-loader"><a class="file-viewer-link" href=""></a><p class="file-viewer-error hidden">Ooops! :-( <br /><span>An error occured. Please download file to view.</span></p>';
	var footerContent = '<i class="fa fa-cloud-download download-icon"></i><a href="">File name...</a><span class="file-size">(220 KB)</span>';
	$("<div/>", {
      class: "m-file-viewer hidden",
    }).prependTo('.l-main');

    $("<div/>", {
      class: "file-viewer-overlay"
    }).appendTo('.m-file-viewer');

    $("<div/>", {
      class: "file-viewer-content"
    }).appendTo('.m-file-viewer');

    $("<div/>", {
      class: "file-viewer-body"
    }).appendTo('.file-viewer-content');
    
    $("<div/>", {
      class: "file-viewer-footer"
    }).appendTo('.file-viewer-content');

    $("<div/>", {
      class: "file-viewer-close"
    }).appendTo('.file-viewer-content');

    $('.m-file-viewer .file-viewer-body').html(bodyContent);
    $('.m-file-viewer .file-viewer-footer').html(footerContent);
	var file = element.attr("data-href");
	var fileName = element.attr("data-fileName") || "File does not have a name";
	var fileSize = element.attr("data-fileSize") || "NA";
	var ext = file.substring(file.lastIndexOf('.') + 1).toLowerCase();

	if (/^(jpeg|jpg|png|bmp)$/.test(ext)) {
		$('.m-file-viewer .file-viewer-body').css("background-image","url("+ file +")");

		$('.m-file-viewer a.file-viewer-link').addClass("hidden");
		$('.m-file-viewer .inline-loader').addClass("hidden");
		$('.m-file-viewer .gdocsviewer').addClass("hidden");
		$('.m-file-viewer .file-viewer-error').addClass("hidden");

		$('.m-file-viewer').removeClass("hidden");
		$('body').css('overflow', 'hidden');
		
	} else if (/^(tiff|pdf|ppt|pps|doc|docx)$/.test(ext)) {
		$('.m-file-viewer .file-viewer-body').css("background","none");

		$('.m-file-viewer .inline-loader').removeClass("hidden");
		$('.m-file-viewer a.file-viewer-link').removeClass("hidden");
		$('.m-file-viewer .gdocsviewer').removeClass("hidden");

		$('.m-file-viewer .file-viewer-error').addClass("hidden");

		$('.m-file-viewer a.file-viewer-link').attr("href",file);
		$('.m-file-viewer a.file-viewer-link').gdocsViewer();

		$('.m-file-viewer').removeClass("hidden");
		$('body').css('overflow', 'hidden');

	} else {
		$('.m-file-viewer .file-viewer-error').removeClass("hidden");
		
		$('.m-file-viewer a.file-viewer-link').addClass("hidden");
		$('.m-file-viewer .inline-loader').addClass("hidden");
		$('.m-file-viewer .gdocsviewer').addClass("hidden");

		$('.m-file-viewer').removeClass("hidden");
		$('body').css('overflow', 'hidden');
	}

	$('.m-file-viewer .file-viewer-close').click(function(e) {
		$('body').css('overflow', 'auto');
		$('.m-file-viewer').remove();
	})

	$('.m-file-viewer .file-viewer-footer a').attr("href", file);
	$('.m-file-viewer .file-viewer-footer a').html(fileName);
	$('.m-file-viewer .file-viewer-footer .file-size').html("(" + fileSize + ")");
}