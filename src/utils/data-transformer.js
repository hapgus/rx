// transformData.js
import {dataSchema} from './data-schema';
import { formatDate } from '../components/Date/DateComponent';



export const transformWithSchema = (data, schemaKey) => {
    const schema = dataSchema[schemaKey];
    console.log('schema',schema)

    if (!schema) {
        throw new Error(`No schema defined for dataset: ${schemaKey}`);
    }

    return [
        schema.headers,
        ...data.map(item => schema.fields.map(field => {
            // Use the formatDate function to format the 'date' field
            if (field === 'date') {
                return formatDate('fullDate', item[field].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'));
            }
            return isNaN(item[field]) ? item[field] : Number(item[field]);
        }))
    ];
    // const dateFormatter = new Intl.DateTimeFormat('en-US', {
    //     year: 'numeric',
    //     month: 'short',
    //     day: '2-digit',
    // });

    // return [
    //     schema.headers,
    //     ...data.map(item => schema.fields.map(field => {
    //         // Format 'date' field using Intl.DateTimeFormat for more readable format
    //         if (field === 'date') {
    //             const formattedDate = new Date(
    //                 item[field].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
    //             );
    //             return dateFormatter.format(formattedDate); // Example: 'September 06, 2024'
    //         }
    //         return isNaN(item[field]) ? item[field] : Number(item[field]);
    //     }))
    // ];
    // return [
    //     schema.headers,
    //     ...data.map(item => schema.fields.map(field => {
    //         // Format 'date' field into a proper date string (or Date object)
    //         if (field === 'date') {
    //             // You can use 'toLocaleDateString' or 'toISOString' depending on the desired format
    //             return new Date(
    //                 item[field].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
    //             ).toLocaleDateString(); // This converts '20240901' to '2024-09-01' and formats it as a readable date.
    //         }
    //         return isNaN(item[field]) ? item[field] : Number(item[field]);
    //     }))
    // ];
//     return [
//       schema.headers,
//       ...data.map(item => schema.fields.map(field => {
//           // Ensure numbers are parsed correctly and strings remain strings
//           return isNaN(item[field]) ? item[field] : Number(item[field]);
//       }))
//   ];
};
