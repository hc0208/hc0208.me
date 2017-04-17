class InsertQiitaItems {

  constructor() {
    this.execute();
  }

  execute() {
    $.getJSON("http://qiita.com/api/v2/users/hc0208/items", function(res){
      $.each(res, function(i, ele){

        var date = new Date(ele.created_at);
        var month = date.getMonth()+1;
        if (month < 10 ){
          month = `0${month}`;
        };

        var tags = []
        $.each(ele.tags, function(i, ele){
          tags.push(ele.name);
        })

        const html = `
          <div class="qiita-collection clearfix">
            <div class="qiita-collection_left">
              <h1><a href="${ele.url}" target="_blank">${ele.title}</a></h1>
              <ul class="clearfix">
                <li>${tags.join(', ')}</li>
              </ul>
            </div>
            <span class="qiita-collection_right">
              ${date.getFullYear()}/${month}/${date.getDate()}
            </span>
          </div>
        `;

        $("#qiitaFeedContent").append(html);
      });
    });
  }
}
