import { useState, useEffect } from 'react';
import { StaffItemType } from '../../commonTypes';
import db from '../../db';
import format from '../../format';
import StaffItem from './components/_StaffItem';


function Staff() {
    
    const [ staffs, setStaffs ] = useState<StaffItemType[]>([]);

    useEffect(() => {
        db.get("getStaff").then(data => {
            setStaffs(format.staff(data));
        })
    }, []);

    return (
        <>

            <div className="header">
                <h1>Staff</h1>
            </div>

            

            <div className="collection">
                {staffs.map(staff => (staff.isActive && <StaffItem item={staff}/>))}
            </div>
        
        </>
    );

}

export default Staff;