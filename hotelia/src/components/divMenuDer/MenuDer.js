import imagen9 from "./stock2.jpeg";
import "https://kit.fontawesome.com/6131ecdde6.js";
import axios from "axios";
import { useEffect,useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import "./MenuDer.css";
function MenuDer()
{
    const history=useNavigate();

      const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
      fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
    
      const handleChange=({target})=>{
            setData({
                  ...data,
                  [target.name]:target.value
            })
      }

    const url="https://hoteliakuepa.herokuapp.com/users/?_id=1001095924";  

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData=async()=>
    {
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //promesa
            setList(response.data); //escribir en el useState List
        })
    },[])

        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.put(url,data);
            if (response.status === 201) 
            {
                  Swal.fire(
                        'Error!',
                        'Hubo un problema al registrar el huesped!',
                        'error'
                  )
                
            }
            else {
                  Swal.fire(
                        'Guardado!',
                        `El huesped ha sido guardado exitosamente!`,
                        'success'
                  )
            }
        }
    return(
            <div class="menuder">
                <Container>
                    <div class="tituloBienvenido">
                        <h2>Bienvenido, Angie Vargas</h2>
                    </div>
                    {list.map((us)=>(
                    <div class="menuderabajo">
                        <div class="fotomenuder">
                            <img src={imagen9} alt=""/>
                            <div class="subirarchivos">
                                <i class="fa-solid fa-file-arrow-up icon_1"></i>
                                <i class="fa-solid fa-upload"></i>
                            </div>
                            <div class="password">
                                <a href="" class="password diseno"><h2>Cambiar contraseña</h2></a>
                            </div>
                        </div>
                        <div class="formularioDatos">
                            <form action="">
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Tipo de documento</label>
                                        <input type="text" value={us.tipodoc}/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">Número de documento</label>
                                        <input type="text" value={us._id}/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Nombres</label>
                                        <input type="text" value={us.nombre}/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">Apellidos</label>
                                        <input type="text" value={us.apellido}/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Fecha nacimiento</label>
                                        <input type="text" value={us.fnacimiento}/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">País de origen</label>
                                        <input type="text" value={us.paisorigen}/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Teléfono de contacto</label>
                                        <input type="text" value={us.telefono}/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">Email</label>
                                        <input type="text" value={us.email}/>
                                    </div>
                                </div> 
                                <div class="contenedor3">
                                    <div class="formularioQ">
                                        <label for="">Contraseña</label>
                                        <input type="text" value={us.password}/>
                                    </div>
                                    <div class="formularioQ separadorr">
                                        <label for="">Confirmar contraseña</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor3">
                                    <div class="formularioQ">
                                        <a href="" class="diseno"><h2>Cambiar</h2></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    ))
                    }
                </Container>
            </div>
        );
}
export default MenuDer;
