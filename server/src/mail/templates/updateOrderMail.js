exports.updateOrderMail = (id,email, status) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Payment Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              <a href="http://localhost:3000"><img class="logo" src="https://res.cloudinary.com/dvoj9zeng/image/upload/v1724695670/tiffin_iubcbg.png"
                      alt="The Tiffin wala Logo"></a>
                      <p>THE TIFFIN WALA || by ANSHUL & DEEPESH</p>
              <div class="message">Order Status Updated</div>
              <div class="body">
                  <p>Dear ${email},</p>
                  <p>Your Order ID is <b>${id}</b></p>
                  <p>Your Order is Updated to <span class='highlight'>${status}</span></p>.
                 
                  <p>Thank you. Come back soon...!!</p>
              </div>
              <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
                      href="mailto:thetiffinwala@gmail.com">thetiffinwala@gmail.com</a>. We are here to help!</div>
          </div>
      </body>
      
      </html>`
  }