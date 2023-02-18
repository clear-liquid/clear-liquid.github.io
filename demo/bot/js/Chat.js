<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui();
})
$(function () {
  $("#btnSend").on("click", function () {
    let text = $("#ipt").val().trim();
    if (text.length <= 0) { return $("#ipt").val("") } let rightml="`<li" class="right_word">
            <img src="/demo/bot/js/Chat.j/bot/img/person02.png"> <span>${text}</span>
          `;
    $(".main .talk_list").append(rigHtml);
    $("#ipt").val("");
    resetui();
    getSend(text);
  });
  function getSend(text) {
    console.log(text);
    $.ajax({
      type: "GET",
      url: "http://www.liulongbin.top:3006/api/robot",
      data: {
        spoken: text
      },
      success: function (item) {
        let data = item.data;
        let text = data.info.text
        if (item.message === "success") {
          let leftHtml = `
          <li class="left_word">
            <img src="/demo/bot/js/Chat.j/bot/img/person01.png"> <span>${text}</span>
          </li>`;
          $(".main .talk_list").append(leftHtml);
          resetui();
          Voice(text);
          return
        }
      }
    })
  };
  function Voice(text) {
    console.log("语音",text)
    $.ajax({
      type: "GET",
      url: "http://www.liulongbin.top:3006/api/synthesize",
      data: {
        text:text
      },
      success: function (item) {
        if (item.status === 200) {
          $("audio").attr('src', item.voiceUrl);
        }
      }
    })
  };
  $("#ipt").keydown(function (event) {
    if (event.key === "Enter") {
      $("#btnSend").click();
    }
  });
});</=>