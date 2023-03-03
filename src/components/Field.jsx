import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
const Field = (props) => {
    return (
        <div className="data_val">
            <h4>{props.name}</h4>
            <h4>{props.email}</h4>
            <Button variant="contained" color="error" ><DeleteIcon /></Button>
        </div>
    )
}

export default Field