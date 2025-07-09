export default function Input({ onChangeInput, input}) {
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={input.initialInvestment} onChange={(e) =>onChangeInput('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label>Annaul Investment</label>
                    <input type="number" required value={input.annualInvestment} onChange={(e) =>onChangeInput('annualInvestment', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected returns</label>
                    <input type="number" required value={input.expectedReturn} onChange={(e) =>onChangeInput('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label>duration</label>
                    <input type="number" required value={input.duration} onChange={(e) =>onChangeInput('duration', e.target.value)} />
                </p>
            </div>
        </section>
    );
}