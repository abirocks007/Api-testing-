package Features;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.Test;

public class TestRunner {

    //src/test/java/Features
    @Test

    public void KarataRun(){
        Results vb= Runner.path("src/test/java/Features").parallel(1);




    }
}
