import * as React from "react";
import {useIsMobile} from "../../utils/use-is-mobile";

export interface Item {
    name: string,
    value: string;
    label: string;
}

export const Item: React.FC<Item> = (
    { name, value, label }
) => {
    return (
        <div className="form-group" aria-label={name}>
            <span className="label">{label}</span>
            <div className="input-group">
                <span className="value">{value}</span>
            </div>
        </div>
    );
};

export interface MessageProps {
    title: string;
    items: Array<Item>;
}

// export const Message = Client.withState<MessageProps, { amount: number, term: number, totalAmount: number }>(
//     ({ title, items, amount, term, totalAmount }) => {
//
//         return (
//             <div className="message bot-message user-data total full-sized-mobile">
//                 <div className="wrap">
//                     <div className="animated">
//                         <form className="data-panel">
//                             <div className="panel-heading">
//                                 <h4>{title}</h4>
//                             </div>
//                             <div className="panel-body">
//                                 <div className="half">
//                                     <span className="transparent">Личные данные</span>
//                                     {items.slice(0, 3).map((item) => <Item {...item} key={item.name} />)}
//                                 </div>
//                                 <div className="half">
//                                     <span className="transparent">Документы</span>
//                                     {items.slice(3,).map((item) => <Item {...item} key={item.name} />)}
//                                 </div>
//                             </div>
//                             <div className="panel-footer">
//                                 <span className="line"/>
//                                 <div className="half">
//                                     {useIsMobile()
//                                         ? <>
//                                             <span>Сумма: {amount} грн</span>
//                                             <span>Срок: {term} дней</span>
//                                         </>
//                                         : <>
//                                             <span>Сумма займа: {amount} грн</span>
//                                             <span>Срок займа: {term} дней</span>
//                                         </>}
//                                 </div>
//                                 <div className="half">
//                                     <span className="label">Итого к возврату:</span>
//                                     <div className="total">
//                                         <span>
//                                             <span className="increased">{totalAmount}&nbsp;</span>
//                                             <span className="rest">грн</span>
//                                         </span>
//                                         <div className="form-group">
//                                             {/*<button type="button" className="btn btn_edit" onClick={handleChange}>*/}
//                                             {/*    <IconPencil/>*/}
//                                             {/*</button>*/}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }, (state) => (state.type === "user") && {
//         term: state.request.term,
//         amount: state.request.amount,
//         totalAmount: state.request.initDebtSum,
//     }
// );
