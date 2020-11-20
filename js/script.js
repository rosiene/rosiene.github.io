$( document ).ready(function() {
    console.log(&#39;ready&#39;);

    $(&#39;#menu-label&#39;).on(&#39;click&#39;, function(){
      $(&quot;aside&quot;).animate({
        width: &quot;toggle&quot;
      });
      $(&#39;.page-overlay&#39;).show();
    });
    $(&quot;#menu-back&quot;).on(&#39;click&#39;, function(){
      $(&quot;aside&quot;).hide();
      $(&#39;.page-overlay&#39;).hide();
    });

    $(&quot;.page-overlay&quot;).on(&#39;click&#39;, function(){
      $(&quot;aside&quot;).hide();
      $(&#39;.page-overlay&#39;).hide();
    });

    $(&quot;#Label1 h2&quot;).on(&#39;click&#39;, function(){
      if ( $(&#39;#Label1 div&#39;).is( &quot;:hidden&quot; ) ) {
        $(&quot;#Label1 div&quot;).slideDown();
      }else{
        $(&quot;#Label1 div&quot;).slideUp();
      }
    });

    $(&quot;#Label2 h2&quot;).on(&#39;click&#39;, function(){
      if ( $(&#39;#Label2 div&#39;).is( &quot;:hidden&quot; ) ) {
        $(&quot;#Label2 div&quot;).slideDown();
      }else{
        $(&quot;#Label2 div&quot;).slideUp();
      }
    });

    $(&quot;#Label3 h2&quot;).on(&#39;click&#39;, function(){
      if ( $(&#39;#Label3 div&#39;).is( &quot;:hidden&quot; ) ) {
        $(&quot;#Label3 div&quot;).slideDown();
      }else{
        $(&quot;#Label3 div&quot;).slideUp();
      }
    });

    $(&quot;#Label4 h2&quot;).on(&#39;click&#39;, function(){
      if ( $(&#39;#Label4 div&#39;).is( &quot;:hidden&quot; ) ) {
        $(&quot;#Label4 div&quot;).slideDown();
      }else{
        $(&quot;#Label4 div&quot;).slideUp();
      }
    });

});
