import axios from "axios";

export default function handler(req, res) {
  let toEmail = "adefeyitimi@gmail.com";
  if (req.method === "POST") {
    var options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.SENDGRID_KEY,
      },

      data: {
        personalizations: [
          { to: [{ email: toEmail, name:req.body.fullname }], subject: req.body.subject },
        ],
        from: { email: req.body.email },
        content: [{ type: "text/plain", value: req.body.message }],
      },
    };

    axios
      .request(options)
      .then((response) => {
        return res.status(200).json(response.data);
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(400);
  }
}
