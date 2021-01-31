import React from 'react';
import './_default.css';

const FormComponentData = () => {
  return (
    <div className="form_container">
      <div className="row g-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Country"
            aria-label="Country"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Sigla"
            aria-label="Sigla"
          />
        </div>
        <button className="btn btn-outline-warning" type="button">
          SEND
        </button>
      </div>
    </div>
  );
};

export default FormComponentData;
