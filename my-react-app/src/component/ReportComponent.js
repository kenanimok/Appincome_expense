import DataContext from "../data/DataContext";
import { useContext } from "react";
const   ReportComponent = ()=>{
    return(
        <div>
            <DataContext.Consumer>
                {context=> <p>รายรับ: {context.income}    รายจ่าย:{context.expense}</p>}
            </DataContext.Consumer>
        </div>
    )





}
export default ReportComponent;