import DataContext from "../data/DataContext";
import { useContext } from "react";
const   ReportComponent = ()=>{
    const {income,expense} = useContext(DataContext)
    return(
        <div>
                <h5>ยอดคงเหลือ</h5>
                <h1>{income-expense}</h1>
                <div className="report-container">
                      <h4>ยอดรายรับ</h4>
                      <p className="report income">{income}</p>

                </div>
                <div className="report-container">
                      <h4>ยอดรายจ่าย</h4>
                      <p className="report expense">{expense}</p>
                </div>
        </div>
    )





}
export default ReportComponent;