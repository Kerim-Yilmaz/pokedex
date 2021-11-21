import { ProgressBar } from "react-bootstrap";
import { progressBarbg } from "../../helper/Helper";
import { useTranslation } from 'react-i18next';




export default function Stats({data}) {
  const { t } = useTranslation();

 


    return (
        <div>

          {data.map((res,index)=>{
            const {base_stat,stat}=res
            return(<>
            <div key={index+1}>
              {t(stat.name)}
              <ProgressBar key={index} animated variant={progressBarbg(stat.name)} now={base_stat} />
              </div>
              </>
            )
          }
            )}
              
        </div>
    )
}

