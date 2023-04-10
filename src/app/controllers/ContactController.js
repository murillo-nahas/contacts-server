class ContactController {
  index(request, response) {
    response.send("Sent from contact controller");
  }

  show() {
    //
  }

  store() {
    //
  }

  update() {
    //
  }

  delete() {
    //
  }
}

module.exports = new ContactController();
