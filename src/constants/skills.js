import LangageProgElements from './../elements/SkillsElement/LangagesProgElements';
import FrameworkElements from './../elements/SkillsElement/FrameworkElements';
import BddElements from './../elements/SkillsElement/BddElements';
import OutilsElements from './../elements/SkillsElement/OutilsElements';
import CmsElements from './../elements/SkillsElement/CmsElements';
import LibJsElements from './../elements/SkillsElement/LibJsElements';

export const ALL_SKILLS = [
  { id: 'langages', label: 'Langages', elements: LangageProgElements },
  { id: 'frameworks', label: 'Frameworks', elements: FrameworkElements },
  { id: 'libjs', label: 'Librairies JS', elements: LibJsElements },
  { id: 'bdd', label: 'Bases de données', elements: BddElements },
  { id: 'outils', label: 'Outils', elements: OutilsElements },
  { id: 'cms', label: 'CMS', elements: CmsElements },
];