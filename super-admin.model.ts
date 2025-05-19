import { Sequelize, Model, DataTypes } from 'sequelize';

export class SuperAdmin extends Model {
    public id!: string;
    public first_name!: string;
    public middle_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public phone!: string;
    public role_id!: string;
    public is_active!: boolean;

    static initModel(connection: Sequelize) {
        SuperAdmin.init(
            {
                id: {
                    type: new DataTypes.UUID(),
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                first_name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                middle_name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                last_name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                email: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                password: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                phone: {
                    type: new DataTypes.STRING(20),
                    allowNull: false,
                },
                role_id: {
                    type: new DataTypes.UUID,
                    allowNull: false,
                },
                is_active: {
                    type: new DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: true
                }
            },
            {
                tableName: 'super_admin',
                sequelize: connection,
                freezeTableName: true,
                timestamps: true,  // adds createdAt and updatedAt
                paranoid: true,    // adds deletedAt (soft delete)
            }
        );
    }

    static initAssociations() {
        // Define associations here if needed
    }

    static initHooks() {
        // define hooks here
    }
}
