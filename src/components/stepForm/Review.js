import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const formArrData = Object.entries(formData);
  // const editTodo = () => {
  //   alert("EDIT todo")
  // }
  return (
    <Container ontainer maxWidth='sm'>
      <h2>Form Details</h2>
      <hr />
      <div>
        {formArrData.map((el) => {
          return <>
            <h2>{el[0]}:{el[1]}
              {/* <span> <IconButton
                color="primary"
                component="span"
                onClick={editTodo}
              ><EditIcon /></IconButton>
              </span> */}
            </h2>

          </>
        })
        }
      </div>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container >
  );
};
