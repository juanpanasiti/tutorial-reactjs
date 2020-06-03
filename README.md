# Creación de un proyecto
`$ npx create-react-app app-name`  
El nombre que reemplaza a `app-name` debe estar todo en minúsculas

# Correr proyecto
`$ npm start`  

# Reordenar la estructura del proyecto
## Crear las siguientes carpetas
- **components** para colocar todos los .js de los componentes
- **assets** para contener las carpetas de css e imagenes
    - css
    - images
## Eliminar los siguientes archivos
- setupTests.js
- App.test.js
- logo.svg

Estos archivos se crean con el proyecto pero no son realmente necesarios.
Para colocar todos los .js de los componentes

## Reubicar los siguientes archivos
Mover `App.css` e `index.css` a `assets/css`

***Error salvaje aparece!!!***  
Una vez hechos estos cambios hay que corregir los errores que surgen de mover estos archivos.
- En `App.js` cambiar  
`import './App.css';`  
por  
`import './assets/css/App.css';`
- En `index.js` cambiar  
`import './index.css';`  
por  
`import './assets/css/index.css';`

## Estructura final del proyecto
- app-name
    - node_modules
        - _muuuuuchos archivos_
    - public
        - _algunos archivos que se crean por defecto_
    - src
        - assets
            - css
                - `App.css`
                - `index.css`
            - images
                - _nada por el momento_
        - components
            - _aca van los Components.js_
        - `App.js`
        - `index.js`
        - `serviceWorker.js`
    - `.gitignore`
    - `package.json`
    - `README.md`
    - `package-lock.json` o `yarn.lock`

# Comandos para usar con el 'Reactjs code snippet' en VS Code
`→` se refiere a la tecla tabuladora
## Para crear esqueletos de componentes:
### Los más útiles que he probado son:
**rcc→**
```
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MyComponent;
```

**rsf→**
```
import React from 'react';

function MyComponent(props) {
    return (
        <div>
            
        </div>
    );
}

export default MyComponent;
```

**rsc→**
```
import React from 'react';

const MyComponent = () => {
    return (
        <div>
            
        </div>
    );
};

export default MyComponent;
```

### Otros comandos (sacados de la documentacion del snippet)
rccp→	class component skeleton with prop types after the class  
rcjc→	class component skeleton without import and default export lines  
rcfc→	class component skeleton that contains all the lifecycle methods  
rwwd→	class component without import statements  
rpc→	class pure component skeleton with prop types after the class  
rscp→	stateless component with prop types skeleton  
rscm→	memoize stateless component skeleton  
rscpm→	memoize stateless component with prop types skeleton  
rsfp→	stateless named function with prop types skeleton  
rsi→	stateless component with prop types and implicit return  
fcc→	class component with flow types skeleton  
fsf→	stateless named function skeleton with flow types skeleton  
fsc→	stateless component with flow types skeleton  
rpt→	empty propTypes declaration  
rdp→	empty defaultProps declaration  
con→	class default constructor with props  
conc→	class default constructor with props and context  
est→	empty state object  
cwm→	componentWillMount method  
cdm→	componentDidMount method  
cwr→	componentWillReceiveProps method  
scu→	shouldComponentUpdate method  
cwup→	componentWillUpdate method  
cdup→	componentDidUpdate method  
cwun→	componentWillUnmount method  
gsbu→	getSnapshotBeforeUpdate method  
gdsfp→	static getDerivedStateFromProps method  
cdc→	componentDidCatch method  
ren→	render method  
sst→	this.setState with object as parameter  
ssf→	this.setState with function as parameter  
props→	this.props  
state→	this.state  
bnd→	binds the this of method inside the constructor  
disp→	MapDispatchToProps redux function  
