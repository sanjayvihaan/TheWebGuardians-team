const btn = document.getElementById("btn");
const output_scan = document.querySelector(".output");
btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  //   event.target.reset();

  const url = document.getElementById("url").value;
  const encodedUrl = encodeURIComponent(url);
  console.log(encodedUrl);
  document.getElementById("url").value = "";
  render();

  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://ipqualityscore.com/api/json/url/DIfN4eg2hWZltfB4eTJemY0tK7vw0mVA/${encodedUrl}`
  );
  request.send();
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    $("body").waitMe("hide");

    const results_url = `
    <table class="table table-striped">
    <tbody>
        <tr>
            <td>Is The Website Safe: <span id="">${data.message}</span></td>
        </tr>
        <tr>
            <td>The Website Domain: <span>${data.domain}</span></td>
        </tr>
        <tr>
            <td>Is The Website Phishing: <span>${data.phishing}</span></td>
        </tr>
        <tr>
            <td>Is The Website Malicious: <span>${data.malware}</span></td>
        </tr>
        <tr>
            <td>The Website Category: <span>${data.category}</span></td>
        </tr>
        <tr>
            <td>Website's Risk Score:<span>${data.risk_score}</span></td>
        </tr>
        <tr>
            <td>Does The Website Have A Spamming Domain: <span>${data.spamming}</span></td>
        </tr>
        <tr>
            <td>Page Size: <span>${data.page_size}</span></td>
        </tr>
        <tr>
            <td>Content Type: <span>${data.content_type}</span></td>
        </tr>
        <tr>
            <td>Is The Website Suspicious: <span>${data.suspicious}</span></td>
        </tr>
        <tr>
            <td>IP Address: <span>${data.ip_address}</span></td>
        </tr>
        
        <tr>
            <td>Parked Domain: <span>${data.parking}</span></td>
        </tr>
        <tr>
            <td>HTTP Status Code: <span>${data.status_code}</span></td>
        </tr>
        <tr>
            <td>Web Server: <span>${data.server}</span></td>
        </tr>
        <tr>
            <td>Domain Age: <span>${data.domain_age.human}</span></td>
        </tr>
        <tr>
            <td>timestamp: <span>${data.domain_age.timestamp}</span></td>
        </tr>
        <tr>
            <td>ISO: <span>${data.domain_age.iso}</span></td>
        </tr>
        <tr>
            <td>Request ID: <span>${data.request_id}</span></td>
        </tr>
    </tbody>
</table>`;

    $("#results").html(results_url);
    $("#modalopen").modal("show");
    // const visit = document.getElementById("visit");
    // visit.addEventListener("click", function () {
    //   window.href(url);
    // });
  });
});
