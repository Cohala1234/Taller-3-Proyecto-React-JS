import MenuIzq from '../../components/sectionMenuIzq/MenuIzq.js';
import MenuDer from '../../components/divMenuDer/MenuDer.js';
function Dashboard()
{
    return(
        <div className="dashboardContainer">
            <MenuIzq/>
            <MenuDer/>
        </div>
    );
}
export default Dashboard;