import React, { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CreateMomentForm() {
  const [moments, setMoments] = useState([
    { name: '', startTime: new Date(), duration: 0, description: '' },
  ]);

  const handleAddMoment = () => {
    setMoments([...moments, { name: '', startTime: new Date(), duration: 0, description: '' }]);
  };

  const handleRemoveItem = (index) => {
    const values = [...moments];
    values.splice(index, 1);
    setMoments(values);
  };

  const handleChangeName = (index, event) => {
    const values = [...moments];
    values[index].name = event.target.value;
    setMoments(values);
  };

  const handleChangeStartTime = (index, event) => {
    const values = [...moments];
    values[index].startTime = event.target.value;
    setMoments(values);
  };

  const handleChangeDescription = (index, event) => {
    const values = [...moments];
    values[index].description = event.target.value;
    setMoments(values);
  };

  const handleChangeDuration = (index, event) => {
    const values = [...moments]
    values[index].duration = event.target.value
    setMoments(values)
  }

  return (
    <Box className='mt-5'>
      {moments.map((item, index) => (
        <div key={`moment-${index}`}>
          <div className='text-right'>
            <button
              type='button'
              class='btn btn-link'
              onClick={() => handleRemoveItem()}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
          <TextField
            required
            id={`moment-name`}
            label='Nome'
            value={item.name}
            variant='filled'
            type='text'
            className='w-100 pr-1'
            onChange={(event) => handleChangeName(index, event)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label='Time'
              type='date'
              value={item.time}
              renderInput={(params) => <TextField {...params} />}
              onChange={(event) => handleChangeStartTime(index, event)}
            />
          </LocalizationProvider>
          <TextField
            required
            id={`moment-name`}
            label='Tempo previsto (minutos)'
            value={item.duration}
            variant='filled'
            type='number'
            className='w-100 pr-1'
            onChange={(event) => handleChangeDuration(index, event)}
          />
          <TextField
            required
            label='Descrição'
            value={item.description}
            variant='filled'
            type='text-area'
            className='w-100 pr-1'
            onChange={(event) => handleChangeDescription(index, event)}
          />
        </div>
      ))}
      <button
        type='button'
        className='btn btn-link text-centerx  '
        onClick={() => handleAddMoment()}
      >
        <AddCircleOutlineIcon /> Adicionar Momento
      </button>
    </Box>
  );
}

export default CreateMomentForm;
