import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name);

    // Construir el contenido del correo con el formato correcto
    const subject = encodeURIComponent(formData.name);
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:frankko.villa@gmail.com?subject=${subject}&body=${body}`;

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;
  };

  return (
    <><div className='moduloform'>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name" id='etiquetas'>Tu Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email" id='etiquetas'>Tu Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message" id='etiquetas'>¿Que deseas escribirnos?</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <div className="button">
          <button className="btn" type="submit">
            Enviar Mensaje
          </button>
        </div>
      </form>
      </div> </>
  );
};

export default Contacto;
