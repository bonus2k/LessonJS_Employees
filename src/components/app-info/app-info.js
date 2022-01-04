import './app-info.css'

function AppInfo(props){
    const {countEmployees, countIsIncreaseEmp} = props
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {countIsIncreaseEmp}</h2>
        </div>
    )
}

export default AppInfo;