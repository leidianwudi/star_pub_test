export declare enum JoinType {
    OneToOne = "OneToOne",
    ManyToOne = "ManyToOne",
    OneToMany = "OneToMany",
    ManyToMany = "ManyToMany"
}
export interface JoinTable {
    joinEnClass: string;
    joinEnClass_Url: string;
    joinEnClassPro: string;
    joinType: JoinType;
    inverseJoinEnClassPro?: string;
    joinColumn?: {
        name: string;
        referencedColumnName: string;
    };
    isArray?: boolean;
}
export declare class AutoParam {
    modelName: string;
    tableName: string;
    selCols?: string[];
    selColsGap?: string[];
    selColsLike?: string[];
    joinTable?: JoinTable[];
}
