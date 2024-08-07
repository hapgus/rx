import styles from './ColorLegend.module.css';
import { PageText } from '../../Text/Text';


export const ColorLegend = ({colors}) =>{


    const colorMapping = {
        [`black stainless steel`]: "#0D1115",  // Black Steel
        white: "#FFFFFF",
        [`textured steel`]: "#8D9093",  // Close match to textured steel
        [`noble steel`]: "#949A9E",  // Noble steel
        [`black tinted mirror`]: "#0D1115",  // Same as black stainless steel
        [`stainless steel`]: "#CFD4D9",  // Stainless steel
        [`essence white`]: "#F2F2F2",  // Slightly different shade of white
        [`printproof stainless steel`]: "#CFD4D9",  // Same as stainless steel
        black: "#000000",
        [`black steel`]: "#0D1115",  // Black steel
        [`graphite steel`]: "#3A3A3A",  // Graphite steel
        [`middle black`]: "#4B4B4B",  // Middle black
        [`apline white`]: "#F5F5F5",  // Alpine white
        [`matte black`]: "#1C1C1C",  // Matte black
        [`monochrome grey`]: "#7F7F7F",  // Monochrome grey
        [`candy apple red`]: "#FF0800",  // Candy apple red
        [`nature green`]: "#4CAF50",  // Nature green
        [`cream white`]: "#FFFDD0",  // Cream white
        [`espresso dark brown`]: "#4E342E",  // Espresso dark brown
        [`mirror finish`]: "#E5E5E5",  // Mirror finish
        [`metallic charcoal`]: "#4A4B4D",  // Metallic charcoal
        [`printproof black stainless steel`]: "#0D1115",  // Same as black stainless steel
        [`smooth white`]: "#FFFFFF",
        [`stainless steel (pcm)`]: "#CFD4D9",  // Same as stainless steel
        [`platinum silver`]: "#E5E4E2",  // Platinum silver
        [`black ceramic`]: "#2B2B2B",  // Black ceramic
        [`smooth black`]: "#1C1C1C",  // Same as matte black
        [`stainless steel look`]: "#B0B7BD",  // Slightly different stainless steel
        [`graphite`]: "#53565A",  // Graphite
        [`iron grey`]: "#484B4D",  // Iron grey
        [`matte silver`]: "#B7B7B7"  // Matte silver
      };

      const formatColorName = (colorName) => {
        const specialCases = {
          printproof: 'PrintProof',
          // Add more special cases here if needed
        };
    
        return colorName
          .split(' ')
          .map(word => {
            const lowerWord = word.toLowerCase();
            return specialCases[lowerWord] || word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
      };
    return(
        <div className={styles.colorListWrapper}>
        {colors && colors.map((e, idx) => {
          let swatchColor = colorMapping[e] || "#000000";
          return (
            <div className={styles.colorListItem} key={idx}>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: swatchColor }}
              />

              <PageText type='productPageColorText'>{formatColorName(e)}</PageText>
            </div>
          );
        })}
      </div>
    )
}

