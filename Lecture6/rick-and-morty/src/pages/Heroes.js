import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';

const Heroes = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
            setLoading(false);
        };
        fetchCharacters();
    }, []);

    const handleRowClick = (params) => {
        navigate(`/heroes/${params.id}`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
    ];

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ height: 500, width: '70%' }}>
                <DataGrid
                    rows={characters}
                    columns={columns}
                    pageSize={5}
                    onRowClick={handleRowClick}
                    sx={{
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                    }}
                />
            </div>

            {/* Сайдпанель для саброуту */}
            <div style={{ width: '30%', padding: '20px', borderLeft: '1px solid #ccc' }}>
                <Outlet /> {/* Відображає саброут, тобто CharacterDetails */}
            </div>
        </div>
    );
};

export default Heroes;
