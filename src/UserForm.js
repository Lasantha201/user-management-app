import { Grid, Typography, Input, Button } from '@mui/material';
import { useState } from 'react';


const UserForm = (props) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return (

        /* Form section */

        <Grid
            container
            justifyContent='center'
            alignItems='start'
            sx={{
                minHeight: '50vh',
                background: '#f0f2f5',
                padding: 2,

            }}
        >

            <Grid
                item
                xs={11}
                sm={8}
                md={6}
                sx={{
                    background: '#ffffff',
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                }}
            >



                <Grid item xs={12} sm={8} md={6}
                    sx={{
                        display: 'flex', flexDirection: 'column'
                    }}
                >
                    <Typography variant='h5'
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 3
                        }}>
                        User Form
                    </Typography>
                </Grid>

                {/* Id */}
                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        component={'lable'}
                        htmlFor='id'
                        sx={{
                            mb: 1, fontWeight: 500
                        }}
                    >

                        ID</Typography>
                    <Input
                        type="number"
                        id='id'
                        name='id'
                        value={id}
                        onChange={e => setId(e.target.value)}
                        sx={{
                            padding: 1,
                            border: '1px solid #ccc',
                            borderRadius: 1,
                            '&:focus': { borderColor: '#00c6e6', outline: 'none' },
                        }}
                        fullWidth
                    />
                </Grid>

                {/* Name */}
                <Grid item xs={12} sm={6}
                    sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        component={'lable'}
                        htmlFor='id'
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            marginTop: '10px',
                            fontSize: '16px',
                            width: '100px',
                            display: 'block'
                        }}
                    >

                        Name</Typography>
                    <Input
                        type="text"
                        id='name'
                        name='name'
                        sx={{ width: '400px' }}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>

                {/* Submit button */}
                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#ff9800',
                        color: '#ffffff',

                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                        }
                    }}
                >
                    Add
                </Button>

            </Grid>
        </Grid>

    );


}

export default UserForm;