const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    //Tengo que ver si esto funciona (?)
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Es necesario el nombre',
        }
      }
    },
    
    description:{
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'Es necesario cargar la descripcion',
        }
      }
    },

    released:{
      type: DataTypes.STRING,
    },

    rating:{
      type: DataTypes.STRING,
    },

    image:{
      type: DataTypes.STRING,
    },

    platforms:{
      type: DataTypes.JSON,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'Es necesario cargar la plataforma',
        }
      }
    }
  },
  {timestamps: false}
  );
};
