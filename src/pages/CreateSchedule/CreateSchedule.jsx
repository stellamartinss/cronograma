import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CreateMomentForm from '../../components/CreateMomentForm/CreateMomentForm';

function CreateSchedule() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [schedule] = useState({ date: '', name: '' });

  console.log(schedule);

  const handleSetName = (event) => {
    setName(event.target.value);
    schedule.name = name;
  };

  const handleSetDate = (value) => {
    console.log('handling setDate');
    setDate(value);
    schedule.date = date;
  };

  const form = (
    <div>
      <h1>Novo Evento</h1>
      <TextField
        required
        id='name'
        label='Nome'
        variant='filled'
        className='w-100 pr-1'
        onChange={handleSetName}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <MobileDatePicker
          label='Select a date'
          value={date}
          onChange={handleSetDate}
          renderInput={(params) => <TextField {...params} />}

          inputFormat='MM/DD/YYYY'
        />
      </LocalizationProvider>
    </div>
  );

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      {form}

      <CreateMomentForm />
    </Box>
  );
}

export default CreateSchedule;
