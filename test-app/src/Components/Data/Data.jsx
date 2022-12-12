import React from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Data.module.css';
import { useState } from 'react';
import Footer from './Footer/Footer';

const Data = ({ isLoggedIn, data }) => {
  const mouseText = data;
  const [state, setState] = useState(mouseText);
  const [count, setCount] = useState(0);

  // creating a table
  if (!isLoggedIn) {
    return <Navigate replace to="/login"></Navigate>;
  } else {
    const rows = state.map((obj) => {
      const cells = obj.rows.map((field) => {
        let elem;
        if (field.isEdit == 'false') {
          elem = (
            <span
              onContextMenu={(e) => colorize(e)}
              onClick={() => editStart(obj.id, field.prop)}
            >
              {field.value}
            </span>
          );
        } else {
          elem = (
            <input
              value={field.value}
              onChange={(event) => change(obj.id, field.prop, event)}
              onBlur={() => editEnd(obj.id, field.prop)}
            />
          );
        }
        return <td key={field.prop}>{elem}</td>;
      });
      return <tr key={obj.id}>{cells}</tr>;
    });

    //function to colorize a line
    function colorize(e) {
      e.preventDefault();
      e.target.closest('tr').style.backgroundColor = 'rgb(195, 195, 240)';
      setCount(count + 1);
    }

    // functions for changing data in table
    function editStart(id, prop) {
      setState(
        state.map((obj) => {
          if (obj.id == id) {
            const rows = obj.rows.map((field) => {
              if (field.prop == prop) {
                return { ...field, isEdit: 'true' };
              } else {
                return field;
              }
            });
            return { id, rows };
          } else {
            return obj;
          }
        })
      );
    }

    function editEnd(id, prop) {
      setState(
        state.map((obj) => {
          if (obj.id == id) {
            const rows = obj.rows.map((field) => {
              if (field.prop == prop) {
                return { ...field, isEdit: 'false' };
              } else {
                return field;
              }
            });
            return { id, rows };
          } else {
            return obj;
          }
        })
      );
    }

    function change(id, prop, event) {
      setState(
        state.map((obj) => {
          if (obj.id == id) {
            const rows = obj.rows.map((field) => {
              if (field.prop == prop) {
                return { ...field, value: event.target.value };
              } else {
                return field;
              }
            });
            return { id, rows };
          } else {
            return obj;
          }
        })
      );
    }

    return (
      <div>
        <div className={classes.dataTable}>
          <tr className={classes.header}>
            <th>№</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Patronymic</th>
            <th>Age</th>
            <th>Native city</th>
            <th>Post</th>
            <th>Expirience (in age)</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Telephone</th>
          </tr>
          <tbody>{rows}</tbody>
        </div>
        <Footer count={count} state={state} />
      </div>
    );
  }
};

export default Data;
