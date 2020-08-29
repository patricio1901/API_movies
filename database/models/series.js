module.exports = function(sequelize, datatypes){
    
    let alias = 'Serie';
    
    let cols = {

        id: {
            type: datatypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: datatypes.STRING(500),
            allowNull: false
        },
        release_date: {
            type: datatypes.DATE,
            allowNull: false
        },
        end_date: {
            type: datatypes.DATE,
            allowNull: false
        }
    }
    
    
    let config = {
        tableName : "series",
        timestamps : true,
        underscored: true
    }
    
    let serie = sequelize.define(alias, cols, config);
    return serie;
    
}