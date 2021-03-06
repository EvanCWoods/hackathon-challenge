module.exports = results => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <title>ServerStatus</title>
        
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header >
            <h1 class="navbar">
                <strong class="title"> Server Status <strong>
            </h1>
        </header>
        <div class="server">
            <div class="serverlist" style="width: 10rem;"></div>
            <div class="teamcard0" style="width: 18rem;">
                <div  class="card-header">   
                    <h2 id ="name-style">${results[0].name} </h2> <br/>
                    <i class="fa-solid fa-server"></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Server ID ${results[0].id}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Server Status ${results[0].status}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Status Timestamp ${results[0].Timestamp}</li>
                </ul>
            </div>
            <div class="buffer"></div>
            <div class="teamcard1" style="width: 18rem;">
                <div  class="card-header">   
                    <h2 id ="name-style">${results[1].name} </h2> <br/>
                    <i class="fa-solid fa-server"></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Server ID ${results[1].id}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Server Status ${results[1].status}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Status Timestamp ${results[1].Timestamp}</li>
                </ul>
            </div>
        </div>
                <footer>
                    <!-- first line of footer will be enquiry and social media icon -->
                    <div class="text-center firstFooter">
                        <div class="enquiry">
                            <p id="needHelp">NEED HELP?</p>
                            <div class="emailLine firstFooter">
                                <img src="./assets/images/emailIcon.png" id="email-icon" alt="Email Icon for enquiry">
                                <p id="enquiry-email">enquiry@serverstatus.com.au</p>
                            </div>
                        </div>
                        <div class="socialMedia">
                            <a href="https://github.com/liamok19/Crypto-Muggles">
                                <img href="" src="./assets/images/facebook.png" class="footer-facebook footer-icon" alt="facebook icon">
                            </a><a href="https://github.com/liamok19/Crypto-Muggles">
                                <img href="" src="./assets/images/twitter.png" class="footer-twitter footer-icon" alt="twitter icon">
                            </a><a href="https://github.com/liamok19/Crypto-Muggles"></a>
                                <img href="https://github.com/liamok19/Crypto-Muggles" src="./assets/images/instagram.png" class="footer-instagram footer-icon"
                                alt="instagram icon">
                            </a>
                        </div>
                    </div>
                    <!-- Last line of will be copyrights -->
                    <div class="copyRight"> &copy; 2022 Crypto Muggles</div>
                </footer>
    
    </body>
    </html>
    
    `
    };

    