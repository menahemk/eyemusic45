//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace eyemusic45.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class exam_q_levels
    {
        public int num_exam { get; set; }
        public int num_question { get; set; }
        public int exam_level { get; set; }
        public int exam_stage { get; set; }
        public int pic_path { get; set; }
        public int a { get; set; }
        public int b { get; set; }
        public int c { get; set; }
        public int d { get; set; }
        public int the_true { get; set; }
    
        public virtual desacriptaion desacriptaion { get; set; }
        public virtual desacriptaion desacriptaion1 { get; set; }
        public virtual desacriptaion desacriptaion2 { get; set; }
        public virtual desacriptaion desacriptaion3 { get; set; }
        public virtual level level { get; set; }
        public virtual stage stage { get; set; }
        public virtual pic_paths pic_paths { get; set; }
    }
}
