import styles from "./defintions.module.css";


import { FEATURE_DEFINITIONS_DATA } from "../../../data/STATIC_DATA";
import { capitalizeFirstLetterEachWord } from "../../../utils/text-help";
import { GroupDataByCategory } from "../../../utils/category-helper";


import { PageText } from "../../../components/Text/Text";
import { StickyNavigationBar } from "../../../components/Navigation/StickyNavigationBar";
// import { ImageComponent } from "../../components/ImageComponent/ImageComponent";


const FeatureDefinitionsPage = () => {

    const groupedData = GroupDataByCategory(FEATURE_DEFINITIONS_DATA);

    console.log(groupedData)
    return (
        <div className={styles.featureDefinitionsPageContainer}>
            <div className={styles.pageHeaderContainer}>
                <div className={styles.pageHeaderWrapper}>
                    <div className={styles.pageHeaderText}>
                        <PageText type="pageHeaderSubtitle">Resources</PageText>
                        <PageText type="pageHeaderTitle">Feature Definitions</PageText>
                        <PageText type="pageHeaderDescription">This is your go-to destination for a quick and informative overview of LG's cutting-edge technology and innovations. You play a pivotal role in guiding customers through our range of products, and we're here to equip you with the knowledge you need to provide exceptional customer experiences. Explore our intuitive and advanced features such as AIDD™, QuadWash® Pro and more.</PageText>
                    </div>
                    <span className={styles.pageHeaderImage}>
                        
                            {/* <img src="/assets/image/backgrounds/resource/lg-mom.webp" /> */}
                     
                    </span>
                </div>
            </div>

            {/* <StickyNavigationBar data={groupedData} /> */}



            {Object.keys(groupedData).map((category, categoryIndex) => (
                <div key={categoryIndex} className={styles.pageBodyContainer}>
                    <div className={styles.pageBodyWrapper}>
                        <div className={styles.featureDefinitionsPageContainer} data-section id={`category-${categoryIndex}`}>
                            <PageText type="pageBodyTitle">{capitalizeFirstLetterEachWord(category)}</PageText>

                            {groupedData[category].map((item, itemIndex) => (
                                <div className={styles.definitionWrapper} key={itemIndex}>
                                    <PageText type="pageResourceItemTitle">{item.feature}</PageText>
                                    <PageText type="pageResourceItemDescription">{item.definition}</PageText>
                                    <PageText type="pageDescription"></PageText>
                                </div>
                            ))}
                        </div>     </div>
                </div>
            ))}


        </div>
        // <div className={styles.featureDefinitionsPageContainer}>
        //     <div className={styles.featureDefinitionsPageWrapper}>
        //         <div className={styles.headerSection1}>
        //             <HeaderText type="h4">Resources</HeaderText>
        //             <HeaderText type="h0">Feature Definitions</HeaderText>
        //             <BodyText type='b1' color='gray'>This is your go-to destination for a quick and informative overview of LG's cutting-edge technology and innovations. You play a pivotal role in guiding customers through our range of products, and we're here to equip you with the knowledge you need to provide exceptional customer experiences. Explore our intuitive and advanced features such as AIDD™, QuadWash® Pro and more.</BodyText>
        //         </div>
        //         <div className={styles.stickyNavWrapper}>
        //             <div>
        //                 <StickyNavigationBar data={groupedData} />
        //             </div>
        //         </div>
        //         <div>
        //         {Object.keys(groupedData).map((category, categoryIndex) => (
        //                 <div key={categoryIndex} className={styles.featureDefinitionsPageContainer} data-section id={`category-${categoryIndex}`}>
        //                     <h2>{category}</h2>
        //                     {groupedData[category].map((item, itemIndex) => (
        //                         <div key={itemIndex}>
        //                             <p>{item.feature}</p>
        //                             <p>{item.definition}</p>
        //                         </div>
        //                     ))}
        //                 </div>
        //             ))}

        //         </div>
        //     </div>
        //  <div className={styles.featureDefinitionsPageWrapper}>
        //         <div className={styles.featureDefitionSection1}>
        //             <div className={styles.headerSection1}>
        //                 <HeaderText type="h4">Resources</HeaderText>
        //                 <HeaderText type="h0">Feature Definitions</HeaderText>
        //                 <BodyText type='b1' color='gray'>This is your go-to destination for a quick and informative overview of LG's cutting-edge technology and innovations. You play a pivotal role in guiding customers through our range of products, and we're here to equip you with the knowledge you need to provide exceptional customer experiences. Explore our intuitive and advanced features such as AIDD™, QuadWash® Pro and more.</BodyText>
        //             </div>
        //         </div>
        //         <div className={styles.featureDefitionSection2}>
        //             <StickyNavigationBar data={groupedData}/>
        //             <nav className={styles.navWrapperSection2}>
        //                 {Object.keys(groupedData).map((category, categoryIndex) => (
        //                     <li>
        //                         <a href={`#category-${categoryIndex}`} style={activeSection === `category-${categoryIndex}` ? activeStyle : {}}>
        //                             <HeaderText type="h0"> {category}</HeaderText>

        //                         </a>
        //                     </li>
        //                 ))}
        //             </nav>
        //         </div>
        //         <div className={styles.featureDefitionSection2}>
        //             {Object.keys(groupedData).map((category, categoryIndex) => (
        //                 <div key={categoryIndex} className={styles.featureDefinitionsPageContainer} data-section id={`category-${categoryIndex}`}>
        //                     <h2>{category}</h2>
        //                     {groupedData[category].map((item, itemIndex) => (
        //                         <div key={itemIndex}>
        //                             <p>{item.feature}</p>
        //                             <p>{item.definition}</p>
        //                         </div>
        //                     ))}
        //                 </div>
        //             ))}

        //         </div>

        //     </div> 

        // </div>
        // <div>
        //     <nav style={{ position: 'fixed', top: 0 }}>
        //         <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
        //             {Object.keys(groupedData).map((category, categoryIndex) => (
        //                 <li key={categoryIndex} style={{ margin: '0 10px' }}>
        //                     <a href={`#category-${categoryIndex}`} style={activeSection === `category-${categoryIndex}` ? activeStyle : {}}>
        //                         {category}
        //                     </a>
        //                 </li>
        //             ))}
        //         </ul>
        //     </nav>
        //     <div style={{ marginTop: '40px' }}>
        //         {Object.keys(groupedData).map((category, categoryIndex) => (
        //             <div key={categoryIndex} className={styles.featureDefinitionsPageContainer} data-section id={`category-${categoryIndex}`}>
        //                 <h2>{category}</h2>
        //                 {groupedData[category].map((item, itemIndex) => (
        //                     <div key={itemIndex}>
        //                         <p>{item.feature}</p>
        //                         <p>{item.definition}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};


export default FeatureDefinitionsPage;