import Form from "../components/FormPage/Form";
function Contacts() {
  return (
    <>
      <section className="contacts">
        <h2 id="contacts">Contacts</h2>
        <div className="container flex justify-around">
          <div className="row text-black w-6/12  self-center">
            <h2 className="text-black">Thanks for coming :D </h2>
          </div>
          <div className="row text-white text-center w-6/12">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
