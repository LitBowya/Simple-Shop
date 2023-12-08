

const Location = () => {
  return (
    <div className="location__container container py-lg-5">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.45037850487!2d-0.0005745250141611709!3d5.647791394333493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzgnNTIuMSJOIDDCsDAwJzA3LjIiRQ!5e0!3m2!1sen!2sgh!4v1701704249554!5m2!1sen!2sgh"
        height="450"
              style={{
                  border: '1px solid black',
                  width: '100%',
                  borderRadius: '10px'
              }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location