import investmentImg from '../src/assets/icons8-investment.gif';
export default function Header(){
    return(
        <div id="header">
            <img src={investmentImg} alt="" />
            <h1>React Investment Calculator</h1>
            <h1 style={{fontSize: "10px"}}><a target="_blank" href="https://icons8.com/icon/QaM8Y9VT9Fzp/stocks-growth">Investment</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></h1>
        </div>
    );    
}