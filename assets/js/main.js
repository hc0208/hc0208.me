class InsertQiitaItems {
  execute() {
    $.getJSON("http://qiita.com/api/v2/users/hc0208/items", function(res){
      $.each(res, function(i, ele){
        var date = new Date(ele.created_at)
        var month = date.getMonth()+1
        if (month < 10 ){
          month = `0${date.getMonth()+1}`
        }
        date = `${date.getFullYear()}/${month}/${date.getDate()}`
        var html = `
          <div class="qiita-collection clearfix">
            <div class="qiita-collection_left">
              <h1><a href="${ele.url}" target="_blank">${ele.title}</a></h1>
            </div>
            <span class="qiita-collection_right">${date}</span>
          </div>
        `
        $("#qiitaFeedContent").append(html)
      })
    });
  }
}
