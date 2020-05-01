import React, { useState } from 'react';

const Identity = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  return(
    <section>
      <div>
        <div className=" row justify-content-center">
         <p>Peux tu indiquer l'identité du patient ?</p>
        </div>
        <div>
          <form>
            <div className="row justify-content-center">
              <div className="col-3 h-50">
                <input type="text"
                className="form-control"
                placeholder="Prénom"
                value={firstName}
                onChange={handleFirstNameChange}/>
              </div>
              <div class="col-3 align-self-center">
              <input type="text"
              className="form-control"
              placeholder="Nom"
              value={lastName}
              onChange={handleLastNameChange}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Identity;


// <div>
//             <input
//             className="rounded"
//             placeholder="prénom"
//             value={firstName}
//             onChange={handleFirstNameChange}
//             />
//           </div>
//           <div>
//             <input
//             className="rounded"
//             placeholder="nom"
//             value={lastName}
//             onChange={handleLastNameChange}
//             />
//           </div>
